import React, {Component, useState, useContext, useReducer, useEffect} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {generalStyle} from '../assets/style/generalStyle';
import Route from '../utils/Route';
import {store} from '../../index';
import {handleUpdateToken} from '../redux/actions/token';
import token from '../redux/reducers/token';

// function CustomizeButton() {
//     const [buttonText, setButtonText] = useState('Click me,   please');
//
//     function handleClick() {
//         return setButtonText('Thanks, been clicked!');
//     }
//
//     return <Button onPress={handleClick} title={buttonText}/>;
// }

// const AppContext = React.createContext({});

// function Navbar() {
//     const {username} = useContext(AppContext);
//     return <Text>{username}</Text>;
// }

// function Messages() {
//     const {username} = useContext(AppContext);
//     return <Text>{username}</Text>;
// }

// const myReducer = (state, action) => {
//     switch (action.type) {
//         case('countUp'):
//             return {
//                 ...state,
//                 count: state.count + 1,
//             };
//         default:
//             return state;
//     }
// };

// function App() {
//     const [state, dispatch] = useReducer(myReducer, {count: 0});
//     return (
//         <View>
//             <Button onPress={() => {
//                 dispatch({type: 'countUp'});
//                 console.log(state);
//             }} title="变动"/>
//             {/*<Text>value: {state.token}</Text>*/}
//         </View>
//     );
// }

// const Person = ({personId}) => {
//     const [loading, setLoading] = useState(true);
//     const [person, setPerson] = useState({});
//
//     useEffect(() => {
//         setLoading(true);
//         // fetch(`https://swapi.co/api/people/${personId}/`)
//         setPerson("222");
//         setLoading(false);
//     }, [personId]);
//
//     if (loading === true) {
//         return <Text>Loading ...</Text>;
//     }
//
//     return (
//         <View>
//             <Text>You're viewing: {person.name}</Text>
//             <Text>Height: {person.height}</Text>
//             <Text>Mass: {person.mass}</Text>
//         </View>
//     );
// };

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {token} = this.props.state;
        return (
            <SafeAreaView style={generalStyle.safeAreaView}>
                <Text>HomePage</Text>
                {/*<Person personId={1}/>*/}
                {/*<AppContext.Provider value={{username: 'super'}}>*/}
                {/*    <Navbar/>*/}
                {/*    <Messages/>*/}
                {/*</AppContext.Provider>*/}
                {/*<Button onPress={() => {*/}
                {/*    Route.navigate('UserPage');*/}
                {/*}} title="跳转"/>*/}
                {/*<App/>*/}
                {/*<Text>{token}</Text>*/}
                {/*<Button onPress={() => {*/}
                {/*    store.dispatch(handleUpdateToken());*/}
                {/*}} title="更新token"/>*/}
            </SafeAreaView>
        );
    }
}

export default HomePage;
