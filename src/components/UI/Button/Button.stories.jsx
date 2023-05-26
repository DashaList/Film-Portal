import Button from './Button.tsx'
import "../../../App/App.scss";
import "../../../App/reset.scss";

export default  {
    title: 'Button',
    component: Button
}


const Template = (arg) => <Button {...arg}/>

export const defaultBtn = Template.bind({})
defaultBtn.args = {
    children: 'Click me',
    variant: 'outlined'
}