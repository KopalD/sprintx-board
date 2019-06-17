
import React, { Component } from 'react';

import './index.scss';

class StoryComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="widget story">
                <span className="header">Stories</span>
                <table class="table col-md-11">
                    <tbody>
                        <tr>
                            <td><div className="circle blue"></div></td>
                            <td scope="row">To-Do</td>
                            <td>4</td>
                        </tr>
                        <tr>
                        <td>
                            <div class="circle yellow"></div></td>
                            <td scope="row">In-Progress</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td><div class="circle orange"></div></td>
                            <td scope="row">Under-Testing</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><div class="circle green"></div></td>
                            <td scope="row">Done</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StoryComponent;