ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([320419.898566, 4063433.375000, 327515.101434, 4069486.625000]);
var wms_layers = [];


        var lyr_ESRIsatellite_0 = new ol.layer.Tile({
            'title': 'ESRI satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Tipodevegetacin_1 = new ol.format.GeoJSON();
var features_Tipodevegetacin_1 = format_Tipodevegetacin_1.readFeatures(json_Tipodevegetacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Tipodevegetacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipodevegetacin_1.addFeatures(features_Tipodevegetacin_1);
var lyr_Tipodevegetacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipodevegetacin_1, 
                style: style_Tipodevegetacin_1,
                interactive: true,
    title: 'Tipo de vegetación<br />\
    <img src="styles/legend/Tipodevegetacin_1_0.png" /> Abies pinsapo<br />\
    <img src="styles/legend/Tipodevegetacin_1_1.png" /> Castanea sativa<br />\
    <img src="styles/legend/Tipodevegetacin_1_2.png" /> Cedrus atlantica<br />\
    <img src="styles/legend/Tipodevegetacin_1_3.png" /> Olea europaea var. europaea<br />\
    <img src="styles/legend/Tipodevegetacin_1_4.png" /> Pinus<br />\
    <img src="styles/legend/Tipodevegetacin_1_5.png" /> Pinus halepensis<br />\
    <img src="styles/legend/Tipodevegetacin_1_6.png" /> Pinus pinaster<br />\
    <img src="styles/legend/Tipodevegetacin_1_7.png" /> Quercus<br />\
    <img src="styles/legend/Tipodevegetacin_1_8.png" /> Quercus faginea<br />\
    <img src="styles/legend/Tipodevegetacin_1_9.png" /> Quercus ilex subsp. ballota<br />'
        });
var lyr_DistanciaPinsapo_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia Pinsapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DistanciaPinsapo_2.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.240000, 4063576.100000, 327004.852400, 4069335.896600]
                            })
                        });
var lyr_Orientacion_final_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientacion_final",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orientacion_final_3.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.500000, 4063577.500000, 327012.500000, 4069342.500000]
                            })
                        });
var format_ndicedeShannon_4 = new ol.format.GeoJSON();
var features_ndicedeShannon_4 = format_ndicedeShannon_4.readFeatures(json_ndicedeShannon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedeShannon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeShannon_4.addFeatures(features_ndicedeShannon_4);
var lyr_ndicedeShannon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ndicedeShannon_4, 
                style: style_ndicedeShannon_4,
                interactive: false,
    title: 'Índice de Shannon<br />\
    <img src="styles/legend/ndicedeShannon_4_0.png" /> 0 - 1,52<br />\
    <img src="styles/legend/ndicedeShannon_4_1.png" /> 1,52 - 1,97<br />\
    <img src="styles/legend/ndicedeShannon_4_2.png" /> 1,97 - 2,44<br />\
    <img src="styles/legend/ndicedeShannon_4_3.png" /> 2,44 - 3,06<br />\
    <img src="styles/legend/ndicedeShannon_4_4.png" /> 3,06 - 9,01<br />'
        });
var format_Segmentacion_5 = new ol.format.GeoJSON();
var features_Segmentacion_5 = format_Segmentacion_5.readFeatures(json_Segmentacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Segmentacion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion_5.addFeatures(features_Segmentacion_5);
var lyr_Segmentacion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion_5, 
                style: style_Segmentacion_5,
                interactive: false,
                title: '<img src="styles/legend/Segmentacion_5.png" /> Segmentacion'
            });
var format_Ros_6 = new ol.format.GeoJSON();
var features_Ros_6 = format_Ros_6.readFeatures(json_Ros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Ros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_6.addFeatures(features_Ros_6);
var lyr_Ros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_6, 
                style: style_Ros_6,
                interactive: false,
                title: '<img src="styles/legend/Ros_6.png" /> Ríos'
            });
var format_Lmites_7 = new ol.format.GeoJSON();
var features_Lmites_7 = format_Lmites_7.readFeatures(json_Lmites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Lmites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmites_7.addFeatures(features_Lmites_7);
var lyr_Lmites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmites_7, 
                style: style_Lmites_7,
                interactive: false,
                title: '<img src="styles/legend/Lmites_7.png" /> Límites'
            });

lyr_ESRIsatellite_0.setVisible(true);lyr_Tipodevegetacin_1.setVisible(false);lyr_DistanciaPinsapo_2.setVisible(false);lyr_Orientacion_final_3.setVisible(false);lyr_ndicedeShannon_4.setVisible(false);lyr_Segmentacion_5.setVisible(true);lyr_Ros_6.setVisible(false);lyr_Lmites_7.setVisible(true);
var layersList = [lyr_ESRIsatellite_0,lyr_Tipodevegetacin_1,lyr_DistanciaPinsapo_2,lyr_Orientacion_final_3,lyr_ndicedeShannon_4,lyr_Segmentacion_5,lyr_Ros_6,lyr_Lmites_7];
lyr_Tipodevegetacin_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'D_ARBO1_SP': 'D_ARBO1_SP', 'D_ARBO2_SP': 'D_ARBO2_SP', 'D_ARBO3_SP': 'D_ARBO3_SP', 'D_ARBO4_SP': 'D_ARBO4_SP', 'D_ARBO5_SP': 'D_ARBO5_SP', 'D_ARBO6_SP': 'D_ARBO6_SP', 'D_ARBO_PRE': 'D_ARBO_PRE', 'D_ARBU_PRE': 'D_ARBU_PRE', 'D_HERB_PRE': 'D_HERB_PRE', 'D_SUEL_PRE': 'D_SUEL_PRE', 'COM_1': 'COM_1', 'COM1': 'COM1', 'D_COM1': 'D_COM1', 'D_COM1_COB': 'D_COM1_COB', 'COM_2': 'COM_2', 'D_COM2': 'D_COM2', 'D_COM2_COB': 'D_COM2_COB', 'COM_3': 'COM_3', 'D_COM3': 'D_COM3', 'D_COM3_COB': 'D_COM3_COB', 'COM_4': 'COM_4', 'D_COM4': 'D_COM4', 'D_COM4_COB': 'D_COM4_COB', 'COM_5': 'COM_5', 'D_COM5': 'D_COM5', 'D_COM5_COB': 'D_COM5_COB', 'COM_6': 'COM_6', 'D_COM6': 'D_COM6', 'D_COM6_COB': 'D_COM6_COB', 'COM_7': 'COM_7', 'D_COM7': 'D_COM7', 'D_COM7_COB': 'D_COM7_COB', 'COM_8': 'COM_8', 'D_COM8': 'D_COM8', 'D_COM8_COB': 'D_COM8_COB', 'USO': 'USO', 'D_USO': 'D_USO', 'D_COMBUSTI': 'D_COMBUSTI', 'COMENTARIO': 'COMENTARIO', 'D_U_BIOGEO': 'D_U_BIOGEO', 'D_OMBROC': 'D_OMBROC', 'D_PISO': 'D_PISO', 'SERIE': 'SERIE', 'D_SERIE': 'D_SERIE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ndicedeShannon_4.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'H': 'H', });
lyr_Segmentacion_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Ros_6.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'jerarquia': 'jerarquia', 'Raster': 'Raster', });
lyr_Lmites_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO_JA': 'CODIGO_JA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Tipodevegetacin_1.set('fieldImages', {'OBJECTID': 'Range', 'D_ARBO1_SP': 'TextEdit', 'D_ARBO2_SP': 'TextEdit', 'D_ARBO3_SP': 'TextEdit', 'D_ARBO4_SP': 'TextEdit', 'D_ARBO5_SP': 'TextEdit', 'D_ARBO6_SP': 'TextEdit', 'D_ARBO_PRE': 'TextEdit', 'D_ARBU_PRE': 'TextEdit', 'D_HERB_PRE': 'TextEdit', 'D_SUEL_PRE': 'TextEdit', 'COM_1': 'Range', 'COM1': 'TextEdit', 'D_COM1': 'TextEdit', 'D_COM1_COB': 'TextEdit', 'COM_2': 'Range', 'D_COM2': 'TextEdit', 'D_COM2_COB': 'TextEdit', 'COM_3': 'Range', 'D_COM3': 'TextEdit', 'D_COM3_COB': 'TextEdit', 'COM_4': 'Range', 'D_COM4': 'TextEdit', 'D_COM4_COB': 'TextEdit', 'COM_5': 'Range', 'D_COM5': 'TextEdit', 'D_COM5_COB': 'TextEdit', 'COM_6': 'Range', 'D_COM6': 'TextEdit', 'D_COM6_COB': 'TextEdit', 'COM_7': 'Range', 'D_COM7': 'TextEdit', 'D_COM7_COB': 'TextEdit', 'COM_8': 'Range', 'D_COM8': 'TextEdit', 'D_COM8_COB': 'TextEdit', 'USO': 'Range', 'D_USO': 'TextEdit', 'D_COMBUSTI': 'TextEdit', 'COMENTARIO': 'TextEdit', 'D_U_BIOGEO': 'TextEdit', 'D_OMBROC': 'TextEdit', 'D_PISO': 'TextEdit', 'SERIE': 'Range', 'D_SERIE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ndicedeShannon_4.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'H': 'TextEdit', });
lyr_Segmentacion_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Ros_6.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'jerarquia': 'TextEdit', 'Raster': 'TextEdit', });
lyr_Lmites_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'CODIGO_JA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Tipodevegetacin_1.set('fieldLabels', {'OBJECTID': 'no label', 'D_ARBO1_SP': 'header label', 'D_ARBO2_SP': 'no label', 'D_ARBO3_SP': 'no label', 'D_ARBO4_SP': 'no label', 'D_ARBO5_SP': 'no label', 'D_ARBO6_SP': 'no label', 'D_ARBO_PRE': 'no label', 'D_ARBU_PRE': 'no label', 'D_HERB_PRE': 'no label', 'D_SUEL_PRE': 'no label', 'COM_1': 'no label', 'COM1': 'no label', 'D_COM1': 'no label', 'D_COM1_COB': 'no label', 'COM_2': 'no label', 'D_COM2': 'no label', 'D_COM2_COB': 'no label', 'COM_3': 'no label', 'D_COM3': 'no label', 'D_COM3_COB': 'no label', 'COM_4': 'no label', 'D_COM4': 'no label', 'D_COM4_COB': 'no label', 'COM_5': 'no label', 'D_COM5': 'no label', 'D_COM5_COB': 'no label', 'COM_6': 'no label', 'D_COM6': 'no label', 'D_COM6_COB': 'no label', 'COM_7': 'no label', 'D_COM7': 'no label', 'D_COM7_COB': 'no label', 'COM_8': 'no label', 'D_COM8': 'no label', 'D_COM8_COB': 'no label', 'USO': 'no label', 'D_USO': 'no label', 'D_COMBUSTI': 'no label', 'COMENTARIO': 'no label', 'D_U_BIOGEO': 'no label', 'D_OMBROC': 'no label', 'D_PISO': 'no label', 'SERIE': 'no label', 'D_SERIE': 'header label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ndicedeShannon_4.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'H': 'no label', });
lyr_Segmentacion_5.set('fieldLabels', {'fid': 'inline label', 'DN': 'no label', });
lyr_Ros_6.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'jerarquia': 'no label', 'Raster': 'no label', });
lyr_Lmites_7.set('fieldLabels', {'NOMBRE': 'no label', 'CODIGO_JA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Lmites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});