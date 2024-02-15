import DriverRegisterForm from "./DriverRegisterForm";
import UserRegisterform from "./UserRegisterForm";

type userDetailsFormProps = {
  phoneNumber: string;
  // token: string | undefined;
  userRole: string;
};
export default function RegisterForm({
  phoneNumber,
  userRole,
}: userDetailsFormProps) {
  if (userRole === "driver") {
    return <DriverRegisterForm phoneNumber={phoneNumber} userRole={userRole} />;
  } else if (userRole === "passenger") {
    return <UserRegisterform phoneNumber={phoneNumber} userRole={userRole} />;
  }
}

