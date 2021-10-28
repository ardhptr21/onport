import setTopUrl from "../utils/setTopUrl";
import setGuestComp from "../utils/setGuestComp";
import Verify from "../pages/email/Verify";
import SendVerify from "../pages/email/SendVerify";

const TOP_URL = "/email";

const authRoutes = [
  {
    name: "verify",
    path: "/verify/:uniqueStr",
    exact: false,
    component: Verify,
    useNavbar: false,
    guest: true,
  },
  {
    name: "send-verify",
    path: "/send-verify/:id",
    exact: false,
    component: SendVerify,
    useNavbar: false,
    guest: true,
  },
];

export default setGuestComp(setTopUrl(authRoutes, TOP_URL));
