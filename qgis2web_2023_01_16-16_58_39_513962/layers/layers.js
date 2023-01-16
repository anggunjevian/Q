var wms_layers = [];

var lyr_02PetaRTRWKabupatenBantul20102030_Administrasi1_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "02 Peta RTRW Kabupaten Bantul 2010 2030_Administrasi-1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/02PetaRTRWKabupatenBantul20102030_Administrasi1_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12261011.069640, -904879.108564, 12323882.924556, -859992.211942]
                            })
                        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_1.png" /> Kecamatan'
            });
var format_SDBANTUL_2 = new ol.format.GeoJSON();
var features_SDBANTUL_2 = format_SDBANTUL_2.readFeatures(json_SDBANTUL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDBANTUL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDBANTUL_2.addFeatures(features_SDBANTUL_2);
var lyr_SDBANTUL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDBANTUL_2, 
                style: style_SDBANTUL_2,
                interactive: true,
                title: '<img src="styles/legend/SDBANTUL_2.png" /> SD BANTUL'
            });
var format_spbubantul_3 = new ol.format.GeoJSON();
var features_spbubantul_3 = format_spbubantul_3.readFeatures(json_spbubantul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spbubantul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spbubantul_3.addFeatures(features_spbubantul_3);
var lyr_spbubantul_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_spbubantul_3, 
                style: style_spbubantul_3,
                interactive: true,
                title: '<img src="styles/legend/spbubantul_3.png" /> spbu bantul'
            });

lyr_02PetaRTRWKabupatenBantul20102030_Administrasi1_modified_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_SDBANTUL_2.setVisible(true);lyr_spbubantul_3.setVisible(true);
var layersList = [lyr_02PetaRTRWKabupatenBantul20102030_Administrasi1_modified_0,lyr_Kecamatan_1,lyr_SDBANTUL_2,lyr_spbubantul_3];
lyr_Kecamatan_1.set('fieldAliases', {'id': 'id', 'Nama Kecam': 'Nama Kecam', });
lyr_SDBANTUL_2.set('fieldAliases', {'SD Negeri Payungan': 'SD Negeri Payungan', '110.28134365775631': '110.28134365775631', '-7.92446677531116': '-7.92446677531116', });
lyr_spbubantul_3.set('fieldAliases', {'Nama': 'Nama', '4': '4', 'Y': 'Y', 'X': 'X', });
lyr_Kecamatan_1.set('fieldImages', {'id': 'TextEdit', 'Nama Kecam': 'TextEdit', });
lyr_SDBANTUL_2.set('fieldImages', {'SD Negeri Payungan': 'TextEdit', '110.28134365775631': 'TextEdit', '-7.92446677531116': 'TextEdit', });
lyr_spbubantul_3.set('fieldImages', {'Nama': 'TextEdit', '4': 'Range', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'id': 'no label', 'Nama Kecam': 'no label', });
lyr_SDBANTUL_2.set('fieldLabels', {'SD Negeri Payungan': 'no label', '110.28134365775631': 'no label', '-7.92446677531116': 'no label', });
lyr_spbubantul_3.set('fieldLabels', {'Nama': 'no label', '4': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_spbubantul_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});