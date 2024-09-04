import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/images/healthmate-logo.png"
            height={80}
            width={80}
            alt="patient"
            className="mb-12 w-fit rounded-full"
          />
          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 HealthMate</p>
        </div>
      </section>
      <Image
        src="/assets/images/register.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
