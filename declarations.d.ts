declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg" {
    // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const content: any;

    export default content;
}

// declare module '*.scss' {
//     interface IClassNames {
//         [className: string]: string
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// declare module '*.css' {
//     interface IClassNames {
//         [className: string]: string
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }
