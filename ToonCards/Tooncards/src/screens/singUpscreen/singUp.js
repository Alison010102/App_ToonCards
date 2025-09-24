import { Colors } from '../../styles/colors'
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: wp("5%"),
  },

  formSingUp: {
    borderRadius: wp("8%"),
    justifyContent: "center",
    alignItems: "center",
    width: wp("90%"),
    height: hp("55%"),
    zIndex: 3,
},

logo: {
    position: "absolute",
    top: hp("1%"),
    fontSize: wp("9%"),
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.segundaMaisEscura,
},

boxForm: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  formImput: {
    fontSize: wp("4%"),
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: wp("4%"),
    marginVertical: hp("1%"),
    width: wp("80%"),
    padding: hp("1.8%"),
    fontWeight: "bold",
  },

  idade: {
    fontSize: wp("4%"),
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: wp("4%"),
    padding: hp("1.8%"),
    marginVertical: hp("1%"),
    width: wp("19%"),
    fontWeight: "bold",
  },

  password: {
    fontSize: wp("4%"),
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: wp("4%"),
    padding: hp("1.8%"),
    marginVertical: hp("1%"),
    width: wp("55%"),
    fontWeight: "bold",
  },

  boxsecurity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "89%",
  },

  boxEfeito: {
    position: "absolute",
    top: -hp("8%"),
    right: -wp("18%"),
    width: wp("70%"),
    height: wp("70%"),
    backgroundColor: Colors.corBranca,
    borderRadius: wp("70%") / 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 3,
  },

  boxEfeitoTwo: {
    position: "absolute",
    top: hp("15%"),
    right: -wp("24%"),
    width: wp("40%"),
    height: wp("40%"),
    borderRadius: wp("40%") / 2,
    backgroundColor: Colors.corParaEfeito,
    zIndex: 3,
  },

  boxEfeitoThee: {
    position: "absolute",
    bottom: "-52%",
    backgroundColor: Colors.corParaEfeito,
    width: wp("170%"),
    height: wp("170%"),
    borderRadius: wp("170%") / 2,
    zIndex: 3,
  },

  boxEfeitoFour: {
    position: "absolute",
    bottom: -hp("8%"),
    right: -wp("18%"),
    width: wp("55%"),
    height: wp("55%"),
    borderRadius: wp("55%") / 2,
    backgroundColor: Colors.corBranca,
    zIndex: 3,
  },

  boxEfeitoFive: {
    position: "absolute",
    top: "-20%",
    left: "-50%",
    width: wp("150%"),
    height: wp("130%"),
    borderRadius: wp("130%") / 2,
    backgroundColor: Colors.amareloMaisClaro,
    zIndex: 1,
  },

  btn: {
    position: "absolute",
    width: wp("80%"),
    bottom: hp("9%"),
    backgroundColor: Colors.segundaMaisEscura,
    padding: hp("2%"),
    textAlign: "center",
    borderRadius: wp("3%"),
    zIndex: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textBtn: {
    color: Colors.corBranca,
    textAlign: "center",
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
});
