<template>
  <div class="login">
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

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="registered('Registered')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: "",
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
    // 注册
    registered(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

