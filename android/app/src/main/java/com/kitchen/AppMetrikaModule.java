/* https://www.sitepoint.com/access-platform-apis-with-react-native-modules/ */

package com.kitchen.appmetrika;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.yandex.metrica.YandexMetrica;
import java.util.Map;

public class AppMetrikaModule extends ReactContextBaseJavaModule {

	public AppMetrikaModule(ReactApplicationContext reactContext) {
		super(reactContext);
	}

	@Override
	public String getName() {
		return "AppMetrika";
	}

	@ReactMethod
	public void hello() {
		try{
			YandexMetrica.reportEvent("Hello!!!");
		} catch(Exception e){}
	}
}
