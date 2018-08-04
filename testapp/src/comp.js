import React, { Component } from 'react';


function Welcome(props) {
    var listOfPeople = [
        {
            name:'foo',
            gender:'male',
        },
        {
            name:'bar',
            gender:'female',
        },
    ]
    return (

            <div className="component">
                {listOfPeople.map(function(person, index){
                    return <p id={index}>{person} {person}</p>;
                })}
            </div>
        )
    }