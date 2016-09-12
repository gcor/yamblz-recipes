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
	public void openRecipeFromHomeSwiper(String json) {
		try{
			YandexMetrica.reportEvent("fromHomeSwiper", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void openRecipeFromSearch(String json) {
		try{
			YandexMetrica.reportEvent("fromSearch", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void openRecipeFromRecommend(String json) {
		try{
			YandexMetrica.reportEvent("fromRecommend", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void openRecipeFromFavourite(String json) {
		try{
			YandexMetrica.reportEvent("fromFavourite", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void openRecipeFromLast(String json) {
		try{
			YandexMetrica.reportEvent("fromLast", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void addFavourite(String json) {
		try{
			YandexMetrica.reportEvent("addFavourite", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void removeFavourite(String json) {
		try{
			YandexMetrica.reportEvent("removeFavourite", json);
		} catch(Exception e){}
	}

	@ReactMethod
	public void startCook(String json) {
		try{
			YandexMetrica.reportEvent("startCook", json);
		} catch(Exception e){}
	}

}
