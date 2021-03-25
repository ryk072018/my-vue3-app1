<template>
  <div class="registered">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-form"
    >
      <el-form-item prop="name">
        <el-input
          v-model="ruleForm.name"
          prefix-icon="el-icon-s-custom"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="ruleForm.pwd"
          show-password
          prefix-icon="el-icon-unlock"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          show-password
          placeholder="请                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     确认密码"
          prefix-icon="el-icon-unlock"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click="goBack(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pwd: "",
        checkPass: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            message: "请确认密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 返回
    goBack(number) {
      this.$router.go(number);
    },
  },
};
</script>
<style lang="scss" scoped>
.registered {
  background-image: url("../assets/p2.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .login-form {
    width: 350px;
    height: 300px;
    border-radius: 5px;
  }
}
</style>

