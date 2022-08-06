import { createVNode, render } from "vue";
import YConfirm from './YConfirm.vue'

// DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'y-confirm-container');
document.body.appendChild(div)

interface ConfirmProp {
    title: string;
    text: string;
}

// 返回的是promise对象，点击取消、确认都要销毁组件
export default ({ title, text }: ConfirmProp) => {
    // 1. 导入被创建的组件
    // 2. 使用createVNode创建虚拟节点
    // 3. 准备一个dom容器装载组件
    // 4. 使用render函数渲染组件到容器
    return new Promise((resolve, reject) => {
        // 点击取消触发的函数
        const cancelCallback = () => {
            render(null, div);
            reject(new Error('点击取消'))
        };
        // 点击确认触发的函数
        const submitCallback = () => {
            render(null, div);
            resolve('');
        }

        const vn = createVNode(YConfirm, { title, text, cancelCallback, submitCallback })
        render(vn, div)
    })
}