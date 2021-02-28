var UserProfile = (function() {
    var logged = false;

    var isLoggedIn = function() {
        return logged;
    }

    var setLoggedIn = function(val) {
        logged = val;
    }

    var disconnect = function() {
        localStorage.clear();
        this.setLoggedIn(false);
    }

    var connectUser = function(firstName, lastName, email, picture, token, services) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setEmail(email);
        this.setPicture(picture);
        this.setToken(token);
        this.setServices(services);

        this.setLoggedIn(true);
    }

    var dump = function() {
        console.log('Logged: ' + this.isLoggedIn());
        console.log('First name: ' + this.getFirstName());
        console.log('Last name: ' + this.getLastName());
        console.log('Email: ' + this.getEmail());
        console.log('Token: ' + this.getToken());
        console.log('Services: ' + this.getServices());
    }

    var getFirstName = function() {
        return localStorage.getItem('firstname');
    };
    var setFirstName = function(name) {
        if (name !== '') {
            var formatted = name.charAt(0).toUpperCase() + name.slice(1);
            localStorage.setItem('firstname', formatted);
        } else {
            localStorage.setItem('firstname', name);
        }
    };

    var getLastName = function() {
        return localStorage.getItem('lastname');
    };
    var setLastName = function(name) {
        if (name !== '') {
            var formatted = name.charAt(0).toUpperCase() + name.slice(1);
            localStorage.setItem('lastname', formatted);
        } else {
            localStorage.setItem('lastname', name);
        }
    };

    var getToken = function() {
        return localStorage.getItem('token');
    };
    var setToken = function(token) {
        localStorage.setItem('token', token);
    };

    var getEmail = function() {
        return localStorage.getItem('email');
    };
    var setEmail = function(email) {
        localStorage.setItem('email', email);
    };

    var getPicture = function() {
        return localStorage.getItem('picture');
    }
    var setPicture = function(img) {
        localStorage.setItem('picture', img);
    }

    var getServices = function() {
        return JSON.parse(localStorage.getItem('services') || '[]');
    };

    var setServices = function(obj) {
        localStorage.setItem('services', JSON.stringify(obj));
    }
    var addService = function(service) {
        var prev = JSON.parse(localStorage.getItem('services') || '[]');
        var arr = prev;

        arr.push(service);
        localStorage.setItem('services', JSON.stringify(arr));
    }
    var removeService = function(obj) {
        var raw = JSON.parse(localStorage.getItem('services') || '[]');
        if (raw === '[]')
            return;
        var remove = -1;
        raw.forEach((element, index) => {
            if (JSON.stringify(element) === JSON.stringify(obj))
                remove = index;
        });
        raw = raw.splice(remove, 1);
        localStorage.setItem('services', JSON.stringify(raw));
    }

    return {
        isLoggedIn: isLoggedIn,
        setLoggedIn: setLoggedIn,
        getFirstName: getFirstName,
        setFirstName: setFirstName,

        getLastName: getLastName,
        setLastName: setLastName,

        getEmail: getEmail,
        setEmail: setEmail,

        getPicture: getPicture,
        setPicture: setPicture,

        getToken: getToken,
        setToken: setToken,

        getServices: getServices,
        setServices: setServices,
        addService: addService,
        removeService: removeService,

        connectUser: connectUser,
        disconnect: disconnect,
        dump: dump
    }
})();

export default UserProfile;