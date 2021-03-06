import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: auto;
`;

export class VersionSwitch extends React.Component {

    getOptions() {
        return this.props.options
            .map((option) => option
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "));
    }

    isActive(option) {
        return option.toLowerCase() === this.props.version;
    }

	render() {
		return (
            <Wrapper>
                <ButtonGroup>
                    {this.getOptions().map((option) => (
                        <Button 
                            key={option}
                            className={this.isActive(option) ? "active disabled" : ""}
                            onClick={() => this.props.switchVersion(option.toLowerCase())}>
                            {option}
                        </Button>)
                    )}
                </ButtonGroup>
            </Wrapper>
		);
	}
}