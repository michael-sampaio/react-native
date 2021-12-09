import React from 'react';
import { View } from 'react-native';

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
//       <View style={{ height: 100, width: 100, backgroundColor: "powderblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center" }}>
//       <View style={{ height: 100, backgroundColor: "powderblue" }} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", flexDirection: 'row' }}>
//       <View style={{ width: 100, backgroundColor: "powderblue" }} />
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "column-reverse"}}>
//       <View style={{ height: 100, width: 100, backgroundColor: "powderblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
//       <View style={{ height: 100, width: 100, backgroundColor: "powderblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style= {{flex: 1}} >
      <View style={{height: 20, backgroundColor: 'blue'}}/>
        <View style={{flex: 3.5, marginTop: 20, alignItems: 'center'}}>
        <View style={{height: 100, width: 100, backgroundColor: 'red'}}/>
        <View style={{marginTop: 20, height: 40, width: 160, backgroundColor: 'red'}}/>
      </View>
      <View style={{flex: 1.5, flexWrap: 'wrap', flexDirection: 'row'}}>
        <View style={{height: 60, width: '50%', backgroundColor: 'yellow'}}/>
        <View style={{height: 60, width: '50%', backgroundColor: 'green'}}/>
        <View style={{height: 15, width: '100%', backgroundColor: 'purple'}}/>
      </View>
      <View style={{ flex: 4.5, flexWrap: 'wrap', flexDirection: "row", justifyContent: 'space-around', alignContent: 'space-around', alignSelf: 'center'}}>
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
        <View style={{ height: 92, width: 92, backgroundColor: "pink" }} />
      </View>
      <View style={{flex: 1, backgroundColor:'white'}}/>
      </View>
    </View>
  );
};

export default App;
