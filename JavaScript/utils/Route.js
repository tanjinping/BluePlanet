export default class Route {
    // reset
    // pop
    // setParams
    // dispatch
    // isFocused
    // canGoBack
    // addListener
    // removeListener
    // dangerouslyGetParent
    // dangerouslyGetState
    // setOptions

    static popToTop() {
        // const navigation = Route.navigation;
        // (!navigation || routerName) && alert('404');
        // Router.navigation.navigate(routerName, {...params});
    }

    static replace() {
        // const navigation = Route.navigation;
        // (!navigation || routerName) && alert('404');
        // Router.navigation.navigate(routerName, {...params});
    }

    static push(name, params = {}) {
        // const navigation = Route.navigation;
        // (!navigation || !filterRouteName(name)) && alert('404');
        // Router.navigation.navigate(routerName, {...params});
    }

    static navigate(routeName, params = {}) {
        (!Route.navigation || !filterRouteName(routeName)) ? Route.navigation.replace('AuthStackNavigator') : Route.navigation.navigate(routeName, {...params});
    }

    static goBack() {
        //     const navigation = NavigationUtil.navigation;
        //     if (!navigation) {
        //         console.log('navigation undefined');
        //         return false;
        //     }
        //     navigation.goBack(key || null);
    }
}

const filterRouteName = (routeName) => {
    return [''].includes(routeName);
};
