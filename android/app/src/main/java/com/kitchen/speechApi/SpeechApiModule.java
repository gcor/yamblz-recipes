package com.kitchen.speechapi;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import ru.yandex.speechkit.*;

public class SpeechApiModule extends ReactContextBaseJavaModule implements VocalizerListener {

	private static final String SPEECH_API_KEY = "c71816d0-b4fb-402f-b208-7ac3ef6dff48";
	private Vocalizer vocalizer;
  	Callback VocalizeEndedCallback = null;      

  	public SpeechApiModule(ReactApplicationContext reactContext) {
    	super(reactContext);
    	SpeechKit.getInstance().configure(reactContext, SPEECH_API_KEY);
  	}

   	@Override
   	public String getName() {
    	return "SpeechApi";
   	}

	@ReactMethod
	public void vocalize(String text, String language, Callback onVocalizeEnded) {
	  	try {
	  		VocalizeEndedCallback = onVocalizeEnded;
            resetVocalizer();
            vocalizer = Vocalizer.createVocalizer(Vocalizer.Language.RUSSIAN, text, true, Vocalizer.Voice.JANE);
            vocalizer.setListener(SpeechApiModule.this);
            vocalizer.start();
	  	}
	  	catch(Exception e){}
	}

	private void resetVocalizer() {
        if (vocalizer != null) {
            vocalizer.cancel();
            vocalizer = null;
        }
    }

    @Override
    public void onSynthesisBegin(Vocalizer vocalizer) {
    }

    @Override
    public void onSynthesisDone(Vocalizer vocalizer, Synthesis synthesis) {
    }

    @Override
    public void onPlayingBegin(Vocalizer vocalizer) {
    }

    @Override
    public void onPlayingDone(Vocalizer vocalizer) {
        if (VocalizeEndedCallback != null)
        	VocalizeEndedCallback.invoke();
    }

    @Override
    public void onVocalizerError(Vocalizer vocalizer, ru.yandex.speechkit.Error error) {
        resetVocalizer();
    }
}