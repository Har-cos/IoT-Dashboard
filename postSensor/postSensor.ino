#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "valama";
const char* password = "123456789";
const char* postSensor = "x.x.x.x:8080/sensor";
bool ledState;
int led = 25;
DHT dht(28,DHT11);

void setup() {
Serial.begin(115200);
WiFi.begin(ssid,password);
while(WiFi.status()!= WL_CONNECTED){
  Serial.print(".");
  delay(250);
  }
if(WiFi.status()== WL_CONNECTED){
  Serial.println();
  Serial.println("Csatlakozva");
  }
dht.begin();  
}

void loop() {
  if(WiFi.status()== WL_CONNECTED){
    ledState = digitalRead(led);
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    String json = "{\"led\":" + String(ledState) +",\"temperature\":" +String(t)+",\"humidity\":"+String(h)+"}";
    HTTPClient http;
    http.begin(postSensor);
    http.addHeader("Content-Type","application/json");
    http.POST(json);
    Serial.print("Post-olt adat: ");
    Serial.println(http.POST(json));
    http.end();
  }
}
