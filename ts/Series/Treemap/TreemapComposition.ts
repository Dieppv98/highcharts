/* *
 *
 *  (c) 2014-2020 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

'use strict';

/* *
 *
 *  Imports
 *
 * */

import BaseSeries from '../../Core/Series/Series.js';
const {
    seriesTypes: {
        line: LineSeries
    }
} = BaseSeries;
import TreemapUtilities from './TreemapUtilities.js';
import U from '../../Core/Utilities.js';
const {
    addEvent,
    extend
} = U;

/* *
 *
 *  Composition
 *
 * */

let treemapAxisDefaultValues = false;

addEvent(LineSeries, 'afterBindAxes', function (): void {
    // eslint-disable-next-line no-invalid-this
    var series = this,
        xAxis = series.xAxis,
        yAxis = series.yAxis,
        treeAxis;

    if (xAxis && yAxis) {
        if (series.is('treemap')) {
            treeAxis = {
                endOnTick: false,
                gridLineWidth: 0,
                lineWidth: 0,
                min: 0,
                dataMin: 0,
                minPadding: 0,
                max: TreemapUtilities.AXIS_MAX,
                dataMax: TreemapUtilities.AXIS_MAX,
                maxPadding: 0,
                startOnTick: false,
                title: null,
                tickPositions: []
            };

            extend(yAxis.options, treeAxis);
            extend(xAxis.options, treeAxis);
            treemapAxisDefaultValues = true;

        } else if (treemapAxisDefaultValues) {
            yAxis.setOptions(yAxis.userOptions);
            xAxis.setOptions(xAxis.userOptions);
            treemapAxisDefaultValues = false;
        }
    }
});
