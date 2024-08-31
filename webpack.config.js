const path = require('path');
module.exports = {
    mode:'development',
    entry: './src/index.js', // Punto d enetrada de la aplicación, de donde va iniiar el uepad
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
module: {
    rules: [
     { 
             test: /\.css$/, // Expresion regular o regex para identificar archivos css
             use: ['style-loader', 'css-loader'], // loader para procesar archivos css
     },
     {
        test: /\.js$/, // Para identificar archivo java cript 
        exclude: /node_modules/, // excluir la carpeta para que no cargue tanto 
        use: {
             loader: 'babel-loader', // loader para lleva javasript moderno a jv moderno para que sea compatible con todos los navegadores 
             opcions: {
                 presets: ['@babel/preset-env'],
             },
            },
        },
    ],
},
devtool: 'source-map', // Generar soucre maps para facilitar depuración
denServer: {
    contentBase: path.resolve(__dirname, 'dist'), //carpeta desde el cual el servidor agarrará los archivos
    compress: true, //habilitando la compresióm (GZIP) para que sea más facil abrir el programa
    port: 900, //puerto del servidor de desarrollo 
   },
};