package com.kitchen;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.stetho.Stetho;
import okhttp3.OkHttpClient;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.stetho.okhttp3.StethoInterceptor;
import java.util.concurrent.TimeUnit;

import java.util.Arrays;
import java.util.List;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.sensormanager.SensorManagerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.kitchen.appmetrika.AppMetrikaPackage;
import com.yandex.metrica.YandexMetrica;
import com.kitchen.speechapi.SpeechApiPackage;

public class MainApplication extends Application implements ReactApplication {

	private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
		@Override
		protected boolean getUseDeveloperSupport() {
			return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
			return Arrays.<ReactPackage>asList(
					new MainReactPackage(),
					new ReactNativePushNotificationPackage(),
					new SensorManagerPackage(),
					new LinearGradientPackage(),
					new SpeechApiPackage(),
					new AppMetrikaPackage()
			);
		}
	};

	@Override
	public ReactNativeHost getReactNativeHost() {
			return mReactNativeHost;
	}

	public void onCreate() {
			super.onCreate();
			Stetho.initializeWithDefaults(this);
			// init AppMetrica SDK
			YandexMetrica.activate(getApplicationContext(), "903405b2-b52d-4e09-ab99-0bf451b43675");
			// Tracking user activity
			YandexMetrica.enableActivityAutoTracking(this);
			OkHttpClient client = new OkHttpClient.Builder()
			.connectTimeout(0, TimeUnit.MILLISECONDS)
			.readTimeout(0, TimeUnit.MILLISECONDS)
			.writeTimeout(0, TimeUnit.MILLISECONDS)
			.cookieJar(new ReactCookieJarContainer())
			.addNetworkInterceptor(new StethoInterceptor())
			.build();
			OkHttpClientProvider.replaceOkHttpClient(client);
	}
}
