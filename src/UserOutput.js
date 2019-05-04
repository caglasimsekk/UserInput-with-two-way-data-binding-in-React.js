import React from "react";
const paragraph1 =
  "Yaşlı bir köpeğe yeni numaralar öğretemezsiniz. Ama konu beyin olunca, bilim adamları bu özdeyişin gerçeklerden fazlasıyla uzak olduğunu keşfettiler.";
const paragraph2 =
  "Yoga terapisi; zihinsel ve fiziksel sağlığı iyileştirmek için yoga duruşlarını, nefes egzersizlerini, meditasyonu kullanan bir terapidir.";
const output = props => {
  return (
    <div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      <p>{props.userName}</p>
    </div>
  );
};
// class UserOutput extends Component {
//   state = {
//     paragraph1:
//       "Yaşlı bir köpeğe yeni numaralar öğretemezsiniz. Ama konu beyin olunca, bilim adamları bu özdeyişin gerçeklerden fazlasıyla uzak olduğunu keşfettiler.",
//     paragraph2:
//       "Yoga terapisi; zihinsel ve fiziksel sağlığı iyileştirmek için yoga duruşlarını, nefes egzersizlerini, meditasyonu kullanan bir terapidir."
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.paragraph1}</p>
//         <p> </p>
//         <p>{this.state.paragraph2}</p>
//       </div>
//     );
//   }
// }
export default output;
