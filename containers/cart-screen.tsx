import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box } from "native-base";
import { RootStackParamList } from "../navigation";

type props = NativeStackScreenProps<RootStackParamList, "Cart">;
export default function CartScreen({ navigation }: props) {
  return <Box></Box>;
}
