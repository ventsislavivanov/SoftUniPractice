import handlebars from 'express-handlebars';

function configHbs(app) {
    const hbs = handlebars.create({
        extname: 'hbs',
        runtimeOptions: {
            allowProtoMethodsByDefault: true,
            allowProtoPropertiesByDefault: true,
        }
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}

export  { configHbs };