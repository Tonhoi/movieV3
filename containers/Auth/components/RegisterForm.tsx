import { Box, Button, Typography, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { User, updateProfile } from "firebase/auth";

import { auth } from "@/firebase/firebase-config";
import { FormControl as FormInput } from "@/components/common";
import { defaultValue } from "@/yups/register/defaultValue";
import { Register as YupRegister, RegisterProps } from "@/yups/register/register";

const RegisterForm = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: YupRegister,
    defaultValues: defaultValue,
  });

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data: RegisterProps) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile(auth?.currentUser as User, {
        displayName: data.fullname,
      });
      reset();
      toast.success("Đăng ký thành công");
    } catch (error) {
      toast.error(
        "Đăng ký thất bại, Gmail đã bị trùng, vui lòng thay đổi Gmail khác và thử lại!"
      );
    }
  };

  return (
    <Container>
      <FormInput control={control} name="fullname" placeholder="Họ và tên" />

      <FormInput control={control} name="email" placeholder="Email" />

      <FormInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        InputProps={{
          type: "password",
        }}
      />
      <FormInput
        control={control}
        name="confirm_password"
        placeholder="Nhập lại mật khẩu"
        InputProps={{
          type: "password",
        }}
      />

      <Button
        variant={"contained"}
        className={"btn-submit"}
        fullWidth
        color="inherit"
        onClick={handleSubmit(onSubmit)}
      >
        <Typography variant={"netflixtitle4"}>Đăng kí</Typography>
      </Button>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {};
});

export default RegisterForm;
