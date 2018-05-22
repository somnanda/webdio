# WebDriver.IO Boilerplate

Boilerplate code for WebdriverIO set up using:
 - Mocha-Chai Frameworks
 - Local and Grid Test Runners configs
 - Allure Reporting

# Grid Config


### Hub Setup

```sh
$ java -jar selenium-server-standalone-3.12.0.jar -role hub -hubConfig gridHubConfig.json
```

### Node Setup

```sh
$ java -Dwebdriver.gecko.driver="./drivers/geckodriver" -jar selenium-server-standalone-3.12.0.jar -role node -nodeConfig gridNodeConfig.json
```

