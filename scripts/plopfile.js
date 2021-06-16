module.exports = function(plop) {
  plop.setGenerator("vue基础模板", {
    description: "创建vue文件",
    prompts: [
      {
        type: "input", // 交互类型
        name: "name", // 参数名称
        message: "请输入文件名称", // 交互提示
      },
      {
        type: "input",
        name: "path",
        message: "请输入文件创建目录",
      },
    ],
    actions: [
      {
        type: "add", // 动作类型
        path: "{{ path }}/{{ name }}.vue", // '{{  }}' 双大括号内设置动态参数
        templateFile: "../plop-templates/views/vue.hbs", // 模板文件地址， 使用hbs文件
      },
    ],
  });
};
