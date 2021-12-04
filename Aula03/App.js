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
    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: "row", justifyContent:"space-evenly", alignContent: 'space-around' }}>
      <View style={{ height: 100, width: 100, backgroundColor: "yellow" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "yellow" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "yellow" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "green" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "green" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "green" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
    </View>
  );
};

export default App;
