/**
 * Configuration manager : manage all configurations (server and client)
 * @constructor
 */
function ConfigurationManager() {

    this.load = function () {
        serverConfigurationChanged = false;
        webClientConfigurationChanged = false;

        var deferredArray = [];
        deferredArray.push(loadServerConfiguration());
        deferredArray.push(loadWebClientConfiguration());
        deferredArray.push(loadDatabaseVersion());

        var d = new $.Deferred();
        $.whenAll(deferredArray)
            .done(d.resolve)
            .fail(d.reject);

        return d;
    }

    this.save = function () {
        var deferredArray = [];
        deferredArray.push(saveServerConfiguration());
        deferredArray.push(saveWebClientConfiguration());

        var d = new $.Deferred();
        $.whenAll(deferredArray)
            .done(d.resolve)
            .fail(d.reject);

        return d;
    }

    this.reset = function () {
        var deferredArray = [];
        deferredArray.push(resetServerConfiguration());
        deferredArray.push(resetWebClientConfiguration());

        var d = new $.Deferred();
        $.whenAll(deferredArray)
            .done(d.resolve)
            .fail(d.reject);

        return d;
    }

    this.isServerFirstStart = function () {
        return serverConfiguration[items.server.firstStart] === "true";
    };

    this.currentLanguage = function () {
        return webClientConfiguration[items.webclient.language];
    };

    this.dateFormat = function () {
        return webClientConfiguration[items.webclient.dateFormat];
    };

    this.refreshPage = function () {
        return webClientConfiguration[items.webclient.refreshPage] === "true";
    };

    this.databaseVersion = function () {
        return databaseVersion;
    };

    this.advancedParametersActive = function () {
        return webClientConfiguration[items.webclient.advancedParametersActive] === "true";
    };

    this.location = function () {
        return {
            active: serverConfiguration[items.server.locationSection].latitude,
            user: serverConfiguration[items.server.locationSection].longitude,
            password: serverConfiguration[items.server.locationSection].altitude,
            password: serverConfiguration[items.server.locationSection].timezone
        };
    };

    this.basicAuthentication = function () {
        return {
            active: serverConfiguration[items.server.basicAuthenticationSection].active === "true",
            user: serverConfiguration[items.server.basicAuthenticationSection].user,
            password: serverConfiguration[items.server.basicAuthenticationSection].password
        };
    };

    this.setServerFirstStartDone = function () {
        if (serverConfiguration[items.server.firstStart] !== "false") {
            serverConfiguration[items.server.firstStart] = "false";
            serverConfigurationChanged = true;
        }
        return this;
    };

    this.setCurrentLanguage = function (value) {
        if (webClientConfiguration[items.webclient.language] != value) {
            webClientConfiguration[items.webclient.language] = value;
            webClientConfigurationChanged = true;
        }
    };

    this.setCurrentLocation = function (latitude, longitude, altitude, timezone) {
        if (serverConfiguration[items.server.location.latitude] != latitude ||
            serverConfiguration[items.server.location.longitude] != longitude ||
            serverConfiguration[items.server.location.altitude] != altitude ||
            serverConfiguration[items.server.location.timezone] != timezone) {

            serverConfiguration[items.server.location.latitude] = latitude;
            serverConfiguration[items.server.location.longitude] = longitude;
            serverConfiguration[items.server.location.altitude] = altitude;
            serverConfiguration[items.server.location.timezone] = timezone;
            serverConfigurationChanged = true;
        }
    };

    this.setAdvancedParametersActive = function (active) {
        var currentlyActive = webClientConfiguration[items.webclient.advancedParametersActive] === "true";
        if (active !== currentlyActive) {
            webClientConfiguration[items.webclient.advancedParametersActive] = active ? "true" : "false";
            webClientConfigurationChanged = true;
        }
        return this;
    };

    this.setDateFormat = function (value) {
        if (webClientConfiguration[items.webclient.dateFormat] != value) {
            webClientConfiguration[items.webclient.dateFormat] = value;
            webClientConfigurationChanged = true;
        }
    };

    this.setRefreshPage = function (active) {
        var currentlyActive = webClientConfiguration[items.webclient.refreshPage] === "true";
        if (active !== currentlyActive) {
            webClientConfiguration[items.webclient.refreshPage] = active ? "true" : "false";
            webClientConfigurationChanged = true;
        }
        return this;
    };

    this.setBasicAuthentication = function (active, user, password) {
        var currentlyActive = serverConfiguration[items.server.basicAuthentication.active] === "true";

        if (currentlyActive != active ||
            serverConfiguration[items.server.basicAuthentication.user] != user ||
            serverConfiguration[items.server.basicAuthentication.password] != password) {

            serverConfiguration[items.server.basicAuthentication.active] = active ? "true" : "false";
            serverConfiguration[items.server.basicAuthentication.user] = user;
            serverConfiguration[items.server.basicAuthentication.password] = password;
            serverConfigurationChanged = true;
        }
    };


    loadServerConfiguration = function () {
        var d = new $.Deferred();

        RestEngine.getJson("rest/configuration/server")
            .done(function (data) {
                serverConfiguration = JSON.parse(data);
                d.resolve();
            })
            .fail(d.reject);

        return d.promise();
    }

    saveServerConfiguration = function () {
        var d = new $.Deferred();

        if (!serverConfigurationChanged) {
            d.resolve();
        } else {
            RestEngine.putJson("/rest/configuration/server", {
                    data: JSON.stringify(serverConfiguration)
                })
                .done(function () {
                    serverConfigurationChanged = false;
                    d.resolve();
                })
                .fail(d.reject);
        }

        return d;
    }

    resetServerConfiguration = function () {
        var d = new $.Deferred();

        RestEngine.putJson("/rest/configuration/server/reset")
            .done(function (newConfiguration) {
                serverConfiguration = newConfiguration;
                serverConfigurationChanged = false;
                d.resolve();
            })
            .fail(function () {
                console.error("failed to reset server configuration");
                d.reject();
            })
        return d;
    }


    loadDatabaseVersion = function () {
        var d = new $.Deferred();

        RestEngine.getJson("rest/configuration/DatabaseVersion")
            .done(function (data) {
                databaseVersion = data;
                d.resolve();
            })
            .fail(d.reject);

        return d.promise();
    }

    loadWebClientConfiguration = function () {
        var d = new $.Deferred();

        RestEngine.getJson("rest/configuration/webClient")
            .done(function (data) {
                loadedClientConfiguration = JSON.parse(data);

                // Merge loaded configuration with default one, in case of some new fields not in loaded configuration
                webClientConfiguration = defaultWebClientConfiguration;
                Object.assign(webClientConfiguration, loadedClientConfiguration);

                d.resolve();
            })
            .fail(function () {
                webClientConfiguration = defaultWebClientConfiguration;
                d.reject();
            });

        return d.promise();
    }

    saveWebClientConfiguration = function () {
        var d = new $.Deferred();

        if (!webClientConfigurationChanged) {
            d.resolve();
        } else {
            RestEngine.putJson("/rest/configuration/webClient", {
                    data: JSON.stringify(webClientConfiguration)
                })
                .done(function () {
                    webClientConfigurationChanged = false;
                    d.resolve();
                })
                .fail(d.reject);
        }

        return d;
    }

    resetWebClientConfiguration = function () {
        var d = new $.Deferred();
        debugger;
        
        webClientConfiguration = defaultWebClientConfiguration;
        webClientConfigurationChanged = true;
        saveWebClientConfiguration()
        .done(function(){
            webClientConfigurationChanged = false;
        })
        .always(d.resolve);

        return d;       
    }

    var getdefaultLanguageFromSupported = function () {
        var navigatorLanguage = navigator.language || navigator.userLanguage;
        var langs = window.getSupportedLanguages();
        return isNullOrUndefined(langs[navigatorLanguage]) ? Object.keys(langs)[0] :
            navigatorLanguage;
    }


    // Items of server configuration
    var items = {};
    items.serverSection = "server";
    items.server = {};
    items.server.firstStart = "firstStart";
    items.server.timezone = "timezone";

    items.server.locationSection = "location";
    items.server.location = {};
    items.server.location.latitude = "latitude";
    items.server.location.longitude = "longitude";
    items.server.location.altitude = "altitude";
    items.server.location.timezone = "timezone";

    items.server.basicAuthenticationSection = "basicAuthentication";
    items.server.basicAuthentication = {};
    items.server.basicAuthentication.active = "active";
    items.server.basicAuthentication.user = "user";
    items.server.basicAuthentication.password = "password";

    // Items of configuration specific to this web client
    items.webclientSection = "webclient";
    items.webclient = {};
    items.webclient.language = "language";
    items.webclient.advancedParametersActive = "advancedParametersActive";
    items.webclient.dateFormat = "dateFormat";
    items.webclient.refreshPage = "refreshPage";
    // Associated default values
    var defaultWebClientConfiguration = {};
    defaultWebClientConfiguration[items.webclient.language] = getdefaultLanguageFromSupported();
    defaultWebClientConfiguration[items.webclient.advancedParametersActive] = "false";
    defaultWebClientConfiguration[items.webclient.dateFormat] = "LLL";
    defaultWebClientConfiguration[items.webclient.refreshPage] = "false";

    // Main configuration instances
    var serverConfiguration;
    var webClientConfiguration;
    var databaseVersion;
    var serverConfigurationChanged;
    var webClientConfigurationChanged;
}