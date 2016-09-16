package com.kitchen.speechapi;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import java.util.Map;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import javax.annotation.Nullable;

import ru.yandex.speechkit.*;
import ru.yandex.speechkit.Error;
import android.support.v4.content.ContextCompat;

import static android.Manifest.permission.RECORD_AUDIO;
import static android.content.pm.PackageManager.PERMISSION_GRANTED;

public class SpeechApiModule extends ReactContextBaseJavaModule implements VocalizerListener, PhraseSpotterListener {

	private static final String SPEECH_API_KEY = "c71816d0-b4fb-402f-b208-7ac3ef6dff48";
	private ReactApplicationContext reactAppContext = null;
	private Vocalizer vocalizer;
	private Callback VocalizeEndedCallback = null;    
	private Callback VocalizeErrorCallback = null;  

	public SpeechApiModule(ReactApplicationContext reactContext) {
		super(reactContext);
		SpeechKit.getInstance().configure(reactContext, SPEECH_API_KEY);
		reactAppContext = reactContext;
	}

	@Override
	public String getName() {
		return "SpeechApi";
	}

	@ReactMethod
	public void vocalize(String text, String language, Callback onVocalizeEnded, Callback onVocalizeError) {
		VocalizeEndedCallback = onVocalizeEnded;
		VocalizeErrorCallback = onVocalizeError;
		resetVocalizer();
		vocalizer = Vocalizer.createVocalizer(Vocalizer.Language.RUSSIAN, text, true, Vocalizer.Voice.OMAZH);
		vocalizer.setListener(SpeechApiModule.this);
		vocalizer.start();
	}

	private void resetVocalizer() {
		if (vocalizer != null) {
			vocalizer.cancel();
			vocalizer = null;
		}
	}

	@ReactMethod
	public void loadSpotter(Callback onLoaded, Callback onError) {
		PhraseSpotterModel model = new PhraseSpotterModel("phrase-spotter/commands");
		Error loadResult = model.load();
		if (loadResult.getCode() != Error.ERROR_OK) {
			onError.invoke("Error occurred during model loading: " + loadResult.getString());
		} else {
			PhraseSpotter.setListener(this);
			Error setModelResult = PhraseSpotter.setModel(model);
			onLoaded.invoke();
		}
	}

	@ReactMethod
	public void startSpotter(Callback onStartSpotterError) {
		if (ContextCompat.checkSelfPermission(reactAppContext, RECORD_AUDIO) != PERMISSION_GRANTED) {
			onStartSpotterError.invoke("Microphone permissions not granted");
		} else {
			Error startResult = PhraseSpotter.start();
			if (startResult.getCode() != Error.ERROR_OK) {
				onStartSpotterError.invoke("Error occurred during model starting: " + startResult.getString());
			}
		}
	}

	@ReactMethod
	public void stopSpotter() {
		Error stopResult = PhraseSpotter.stop();
	}

	private void sendEvent(String eventName, @Nullable WritableMap params) {
		reactAppContext
			.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
			.emit(eventName, params);
	}

	// Implementation of VocalizerListener
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
		if (this.VocalizeEndedCallback != null)
			this.VocalizeEndedCallback.invoke();
	}

	@Override
	public void onVocalizerError(Vocalizer vocalizer, ru.yandex.speechkit.Error error) {
		resetVocalizer();
		if (this.VocalizeErrorCallback != null)
			this.VocalizeErrorCallback.invoke(error.getString());
	}

	//Implementation of PhraseSpotterListener
	@Override
	public void onPhraseSpotted(String phrase, int i) {
		WritableMap params = Arguments.createMap();
		params.putString("command", phrase);
		sendEvent("phraseSpotted", params);
	}

	@Override
	public void onPhraseSpotterStarted() {
		//updateCurrentStatus("PhraseSpotter started");
	}

	@Override
	public void onPhraseSpotterStopped() {
		//updateCurrentStatus("PhraseSpotter stopped");
	}

	@Override
	public void onPhraseSpotterError(Error error) {
		WritableMap params = Arguments.createMap();
		params.putString("error", error.toString());
		sendEvent("spotterError", params);
	}
}