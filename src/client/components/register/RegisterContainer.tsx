// import { useState } from "react";
// import FormWithNumber from "./FormWithNumber";
// import { ConfirmationResult } from "firebase/auth";
// import OtpForm from "./OtpForm";
// // import SelectUser from "./SelectUser";
// // import UserDetailsForm from "./RegisterForm";
// import UserRegisterform from "./UserRegisterForm";

// export default function RegisterContainer() {
//   const [phone, setPhone] = useState<string>("");
//   const [confirmed, setConfirmed] = useState<ConfirmationResult | null>(null);
//   const [currentForm, setCurrentForm] = useState<number>(1);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [token, setToken] = useState<string>("");
//   // const [user, setUser] = useState<string>("");
//   switch (currentForm) {
//     case 1:
//       return (
//         <FormWithNumber
//           phone={phone}
//           setPhone={setPhone}
//           setConfirmed={setConfirmed}
//           setCurrentForm={setCurrentForm}
//         />
//       );
//     case 2:
//       return (
//         <OtpForm
//           phone={phone}
//           confirmed={confirmed}
//           setToken={setToken}
//           setCurrentForm={setCurrentForm}
//         />
//       );
//     // case 3:
//     //   return <SelectUser setUser={setUser} setCurrentForm={setCurrentForm} />;
//     case 4:
//       return <UserRegisterform phoneNumber={phone} token={token} />;
//     default:
//       break;
//   }
// }
