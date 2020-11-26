//数据类型
//布尔值、数值、字符串、null、undefined
let a:string | number='one'//联合类型

//接口
interface dog{
    run():any;
    say(b:number):string;
    color?:string;//可选
    [other:string]:any;//任意属性
}
let d:dog={
    run:function(){
        return ""
    },
    say(b){
        return ''
    }
}
//数组
let c:number[]=[1,2,3]
//使用接口表示数组
interface e{
    [index:number]:number;
}
let f:e=[1,2,3]
//函数声明
let g=(h:string,i:number):number=>{
    return 12
}
//A function whose declared type is neither  'void' nor 'any' must return a value.

//接口定义函数形状
 interface j{
     (k:string,m?:number):boolean;
 }
 let l:j

 //类型断言
 //dog as cat as any 
 //声明文件 就像全局变量一样 以.d.ts为后缀
declare var jq:(ele:string)=>any;
//导出 导出枚举
export {a};
export default function(){

}
//导入
//import {name} from 'jq';
//console.log(name);
//typescript 写nodejs 
//npm install @types/node --save-dev




//类型别名
type mixed=number | string;
//元组
let arr:[string,number]=['sting',1]
//枚举
enum names{jim,tony,angu};
names['jim'] == 1 //true
//类
class A{
    public k;
    constructor(k:any){
        this.k=k
    }
    l(){

    }
} 
//继承 修饰符 public protected private readonly
class B extends A{
    constructor(m:any){
        super(m)
    }
    static q(){

    }
    //拦截set get 必须有返回值 set 必须有一个参数 不能有返回值
    get n():string{
        return '2'
    }
    set o(p:any){
    }
}

//抽象类 不能被实例化 只能有子类去实现
abstract class name {
    constructor(parameters:any) {
    
    }
}
 class C extends name{

 }
 //接口：把具有共同点的 class 抽象为一个接口 
//类实现接口
interface D{
    r():void;
}
class F{
}
class E extends F implements D{
    constructor(){
        super()
    }
    r(){

    }
}
new E();
//接口继承接口
//接口继承类


//接口合并
interface G{
    name:string;
}
interface G{
    name:string;
    age:number;
}
//泛型
//举例  传入什么类型就返回什么类型
//<T>声明泛型 T
//泛型继承T extends Interface 
 function s<T>(value:T):T{
     return value;
 }
//模块 内部模块：命名空间 外部模块
//类的装饰器
function t(u:any){
u.prototype.v='d'
}

@t
class H{
    constructor(){

    }
}
new H()
//装饰器工厂
function w(x:any):any{
    //x='xxxx'是参数
return function (y:any){
    //y指的是I这个类
}
}
@w('xxx')
class I{
    constructor(){

    }
}
new I()
//方法装饰器 监视修改替换方法的定义
//参数(类构造函数，方法名字，方法描述)
//属性装饰器