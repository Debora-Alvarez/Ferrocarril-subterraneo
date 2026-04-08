var config = {
   style: 'mapbox://styles/arobed21/cmnp5q17p003e01s8949ndd8b',
    
    accessToken: 'pk.eyJ1IjoiYXJvYmVkMjEiLCJhIjoiY21ub3Jlajl5MDM0bjJvczdsMTVkbWpkNyJ9.PJROhaYI1Heogujx3_P3SQ',
    showMarkers: true,
    markerColor: '#c555a5',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    flyToSpeed: 0.1,    // Velocidad de crucero bajísima
    screenSpeed: 0.1,   // Esto suaviza la relación entre el zoom y el movimiento
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El Ferrocarril Subterráneo: La Ruta de Harriet Tubman',
    subtitle: '1.000 kilómetros de valentía y códigos secretos hacia la libertad',
    byline: 'Mapa narrativo por Débora Álvarez',
    // AQUÍ VA EL BACKGROUND:
    description: 'El Ferrocarril Subterráneo no fue un tren real, sino una red clandestina de rutas y refugios que ayudó a miles de personas a escapar de la esclavitud en el siglo XIX. Harriet Tubman, conocida como la "Moisés de su pueblo", fue su guía más legendaria. Tras escapar ella misma en 1849, arriesgó su vida en 13 misiones para rescatar a otros, guiándolos a través de pantanos y bosques bajo la única luz de la Estrella Polar. Este mapa recorre los puntos clave de su viaje más heroico: desde los humedales de Maryland hasta la libertad absoluta en Canadá.',
    
    chapters: [
        {
        id: 'introduccion',
        title: 'El Ferrocarril Subterráneo',
        
        description: "El Ferrocarril Subterráneo no fue un tren real con locomotoras y raíles, sino una de las redes de resistencia más audaces de la historia. Fue una organización clandestina de rutas, barcos y casas de seguridad que operó en el siglo XIX para ayudar a miles de personas esclavizadas a escapar hacia el Norte y Canadá.<br>Para mantener el secreto, la red utilizaba códigos ferroviarios: los guías eran 'maquinistas', los fugitivos eran 'pasajeros' y los refugios eran 'estaciones'.<br>Harriet Tubman, apodada la 'Moisés de su pueblo', fue su figura más legendaria. Tras escapar de Maryland en 1849, regresó al sur en 13 misiones suicidas. Guiada por la Estrella Polar y canciones en clave, logró rescatar a decenas de personas, presumiendo siempre de que en su tren 'nunca se perdió a un solo pasajero'.<br>Este mapa recorre su ruta más heroica: desde los traicioneros pantanos de su infancia hasta la libertad definitiva en Canadá.",
        location: {
            center: [-76.1509, 38.4312], // Maryland de fondo
            zoom: 5, // Un zoom alejado para que se vea toda la costa este
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: []
    },
        {
            id: 'primero: maryland',
            alignment: 'left',
            hidden: false,
            title: 'Blackwater: El Laberinto de Agua',
            image: ('https://content-historia.nationalgeographic.com.es/medio/2021/02/02/harriet-tubman-with-rescued-slaves-new-york-times_7ffc7a33_800x480.jpeg'),
            description: ' Harriet Tubman nació y creció en estos humedales del condado de Dorchester. No escapó por caminos trazados, sino por los densos pantanos del río Blackwater. Ella conocía este terreno palmo a palmo; sabía que caminar por el agua era la única forma de que los perros de los cazadores de esclavos perdieran su rastro. Aquí, bajo el silencio de los cipreses, Harriet aprendió a leer las estrellas y a convertir la naturaleza en su primera aliada hacia la libertad.',
            location: {
    center: [-76.1509, 38.4312],
    zoom: 13,
    pitch: 60,
    bearing: 0
},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'linea-ruta', // El nombre que le pusiste en Mapbox Studio
                    opacity: 0          // 0 significa invisible
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'segundo:philadelphia',
            alignment: 'right',
            hidden: false,
            title: 'Filadelfia: La Estación Central',
            image: ('https://cloudfront-us-east-1.images.arcpublishing.com/pmn/IKRJLD6ULNDT5EI2COHSSJK6BU.JPG'),
            description: 'Al cruzar la línea Mason-Dixon y llegar a Filadelfia en 1849, Harriet sintió que nacía de nuevo. Esta ciudad era el corazón palpitante del Ferrocarril Subterráneo. Aquí, redes organizadas de abolicionistas blancos y negros ofrecían a los "pasajeros" lo que el pantano les había negado: ropa limpia, comida caliente y documentos falsos. En Filadelfia, Harriet dejó de ser una fugitiva para convertirse en "maquinista", jurando volver al sur para rescatar a su familia.',
            location: {
    center: [-75.1652, 39.9526],
    zoom: 13,
    pitch: 60,
    bearing: -10
},
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                    layer: 'linea-ruta', // El nombre que le pusiste en Mapbox Studio
                    opacity: 1          // 0 significa invisible
                }],
            onChapterExit: []
        },
        {
            id: 'tercero:ohio',
            alignment: 'left',
            hidden: false,
            title: 'Eagle Creek: El Escondite en la Frontera',
            image: ('https://img.atlasobscura.com/zYsGa2z7t0jZxSXeDTW6VwKSd4S6pgrF19QrUrOvJMk/rt:fit/w:1200/q:80/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy96ZG91/MnZybWxzbzM0ODQy/MjQ0MWZkYTE3NTI5/OF9NRCBERSBhbmQg/VHVibWFuIDAxNy5K/UEc.jpg'),
            description: 'Tras cruzar el río Ohio, la libertad seguía siendo frágil. Zonas salvajes como Eagle Creek eran paradas tácticas fundamentales. En estos bosques y arroyos, los fugitivos se escondían durante el día mientras los "vigilantes" de la zona encendían faroles secretos para indicar que el camino estaba despejado. Era un territorio de máxima tensión, donde el sigilo absoluto y el conocimiento de los bosques permitían avanzar hacia el norte sin ser capturados por los cazadores de recompensas.',
            location: {
    center: [-83.7571, 38.7441],
    zoom: 13,
    pitch: 60,
    bearing: 30
},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'linea-ruta', // El nombre que le pusiste en Mapbox Studio
                    opacity: 1          // 0 significa invisible
                }],
            onChapterExit: []
        },
        {
            id: 'cuarto:toronto',
            alignment: 'right',
            hidden: false,
            title: 'St. Catharines: La Tierra Prometida',
            image: ('https://th-thumbnailer.cdn-si-edu.com/AUtQD2LG7E-FKv9Jr0mA2ZLW-No=/800x533/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/29/01/2901a298-b8e6-4998-8af2-0532007f9368/24113144_150614043742.jpg'),
            description: 'El viaje terminaba cruzando el puente sobre las cataratas del Niágara. En St. Catharines, bajo la ley británica, la libertad era por fin absoluta e irreversible. Harriet Tubman estableció aquí su base de operaciones durante una década. En esta comunidad, los antiguos esclavos se convertían en ciudadanos libres, construyendo iglesias como la Salem Chapel y demostrando al mundo que ninguna cadena es más fuerte que el deseo de vivir con dignidad. Harriet nunca perdió a un solo "pasajero" en su ruta hacia esta meta.',
            location: {
    center: [-79.2467, 43.1594],
    zoom: 13,
    pitch: 60,
    bearing: 0
},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'linea-ruta', // El nombre que le pusiste en Mapbox Studio
                    opacity: 1          // 0 significa invisible
                }],
            onChapterExit: []
        }
    ]
};
