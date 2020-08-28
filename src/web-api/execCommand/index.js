const commands = [
  {
    name: 'backColor',
    text: '设置背景色',
    promptText: '请输入颜色值',
  },
  {
    name: 'bold',
    text: '设置/取消 加粗',
  },
  {
    name: 'ClearAuthenticationCache',
    text: '清除权限认证',
  },
  {
    name: 'contentReadOnly',
    text: '设置/取消 内容可编辑状态',
  },
  {
    name: 'copy',
    text: '复制',
  },
  {
    name: 'createLink',
    text: '创建连接',
    promptText: '请输入连接',
  },
  {
    name: 'cut',
    text: '剪切',
  },
  {
    name: 'decreaseFontSize',
    text: '减小字号',
  },
  {
    name: 'defaultParagraphSeparator',
    text: '设置新段落分隔符',
    promptText: '请输入分隔符标签名',
  },
  {
    name: 'delete',
    text: '删除',
  },
  {
    name: 'enableAbsolutePositionEditor',
    text: '支持拖动',
  },
  {
    name: 'enableInlineTableEditing',
    text: '支持编辑表格的行和列',
  },
  {
    name: 'enableObjectResizing',
    text: '支持调整大小',
  },
  {
    name: 'fontName',
    text: '设置字体名字',
    promptText: '请输入字体名字',
  },
  {
    name: 'fontSize',
    text: '设置字体大小',
    promptText: '请输入字体大小(1 ~ 7)',
  },
  {
    name: 'foreColor',
    text: '设置字体颜色',
    promptText: '请输入字体颜色',
  },
  {
    name: 'formatBlock',
    text: '用块级元素包裹内容',
    promptText: '请输入标签名',
  },
  {
    name: 'forwardDelete',
    text: '删除光标后的字符',
  },
  {
    name: 'heading',
    text: '设置 H1 ~ H6',
  },
  {
    name: 'hiliteColor',
    text: '修改背景色',
    promptText: '请输入颜色值',
  },
  {
    name: 'increaseFontSize',
    text: '增大fontSize',
  },
  {
    name: 'indent',
    text: '缩进',
  },
  {
    name: 'insertBrOnReturn',
    text: '如何处理换行',
  },
  {
    name: 'insertHorizontalRule',
    text: '设置分割线',
  },
  {
    name: 'insertHTML',
    text: '设置 HTML',
    promptText: '请输入HTML',
  },
  {
    name: 'insertImage',
    text: '插入图片',
    promptText: '请输入图片链接',
  },
  {
    name: 'insertOrderedList',
    text: '插入有序列表',
  },
  {
    name: 'insertUnorderedList',
    text: '插入无序列表',
  },
  {
    name: 'insertParagraph',
    text: '插入段落',
  },
  {
    name: 'insertText',
    text: '插入文本',
    promptText: '请输入插入的文本',
  },
  {
    name: 'italic',
    text: '斜体',
  },
  {
    name: 'justifyCenter',
    text: '居中对齐',
  },
  {
    name: 'justifyFull',
    text: '两端对齐',
  },
  {
    name: 'justifyLeft',
    text: '左对齐',
  },
  {
    name: 'justifyRight',
    text: '右边对齐',
  },
  {
    name: 'outdent',
    text: '取消缩进',
  },
  {
    name: 'paste',
    text: '粘贴',
  },
  {
    name: 'redo',
    text: '重做',
  },
  {
    name: 'removeFormat',
    text: '清楚格式',
  },
  {
    name: 'selectAll',
    text: '选中当前所有内容',
  },
  {
    name: 'strikeThrough',
    text: '删除线',
  },
  {
    name: 'subscript',
    text: '下标',
  },
  {
    name: 'superscript',
    text: '上标',
  },
  {
    name: 'underline',
    text: '下划线',
  },
  {
    name: 'undo',
    text: '撤销',
  },
  {
    name: 'unlink',
    text: '移除超链接',
  },
  {
    name: 'styleWithCSS',
    text: '使用 css 而不是 html 标签',
    args: [true],
  },
];

function init() {
  const buttonList = commands.map((command) => {
    const button = document.createElement('button');
    const { name, text, promptText, args } = command;
    let btnText = name + (text ? `(${text})` : '');
    if (!document.queryCommandSupported(name)) {
      button.setAttribute('disabled', true);
      btnText += `- 你的浏览器不支持`;
    }
    button.innerText = btnText;

    button.addEventListener('click', () => {
      let argArr = [];
      if (promptText) {
        argArr = [window.prompt(promptText)];
      } else if (args) {
        argArr = args;
      }
      const success = document.execCommand(name, false, ...argArr);
      console.log(`${name} command exec ${success ? 'success' : 'fail'}`);
    });

    return button;
  });

  buttonList.forEach((node) => document.querySelector('.commands').appendChild(node));
}

init();
