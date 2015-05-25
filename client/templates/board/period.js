Periods = {
    indexes: [0, 1, 2, 3, 4, 5, 6],
    labels: ['1 day', '2 days', '3 days', '4 days', '1 week', '2 weeks', '1 month'],
    values: [{
        value: 10,
        unit: 'seconds'
    }, {
        value: 1,
        unit: 'minutes'
    }, {
        value: 3,
        unit: 'days'
    }, {
        value: 4,
        unit: 'days'
    }, {
        value: 7,
        unit: 'days'
    }, {
        value: 14,
        unit: 'days'
    }, {
        value: 1,
        unit: 'months'
    }]
}

Template.period.onRendered(function() {
    var value = Session.get('periodInHours');
    var $slider = this.$(".periodSlider");
    $slider.slider({
        value: 0,
        ticks: Periods.indexes,
        tooltip: 'always',
        formatter: function(value) {
            return Periods.labels[value];
        }
    });
    $slider.on('change', function(evt) {
        Session.set('done-period', Periods.values[evt.value.newValue]);
        console.log('change', Session.get('done-period'));
    })
});
