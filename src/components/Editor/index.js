import React, { Component } from "react";
import TextInput from "./TextInput";
import { Formik } from "formik";
import "./Editor.scss";

export default class Editor extends Component {
  handleFormChange(values) {
    this.props.handlePreviewChange(values);
  }

  render() {
    const { pageTitle, carouselItems, ctaButtons } = this.props;
    return (
      <Formik
        initialValues={{
          pageTitle,
          carouselItems,
          ctaButtons
        }}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <form
            className="Editor"
            onKeyUp={this.handleFormChange.bind(this, values)}
          >
            <div className="Editor__section">
              <p>Edit page title</p>
              <TextInput
                id="pageTitleEditor"
                name="pageTitle.text"
                type="text"
                label="Text"
                onChange={handleChange}
                value={values.pageTitle.text}
              />
              <TextInput
                id="pageTitleBgEditor"
                type="text"
                name="pageTitle.style.backgroundColor"
                label="Background"
                onChange={handleChange}
                value={values.pageTitle.style.backgroundColor}
              />
              <TextInput
                id="pageTitleCEditor"
                name="pageTitle.style.color"
                type="text"
                label="Color"
                value={values.pageTitle.style.color}
                onChange={handleChange}
              />
            </div>

            <div className="Editor__section">
              <p>Manipulate carousel images</p>
              <TextInput
                id="carouselItem"
                name="carouselItems"
                type="text"
                label="How many"
                onChange={handleChange}
                value={values.carouselItems}
              />
            </div>
            <div className="Editor__section">
              <p>Add CTA buttons</p>
              <button
                type="button"
                onClick={() => {
                  this.props.addCtaButtons("inc");
                }}
              >
                <span role="img" aria-label="increment">
                  ➕
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  this.props.addCtaButtons("dec");
                }}
              >
                <span role="img" aria-label="increment">
                  ➖
                </span>
              </button>
              {values.ctaButtons.map((el, index) => (
                <React.Fragment key={index}>
                  <TextInput
                    id={`ctaButton${index}`}
                    name={`ctaButtons[${index}].text`}
                    type="text"
                    label={`CTA ${index} text`}
                    onChange={handleChange}
                    value={values.ctaButtons[index].text}
                  />
                  <TextInput
                    id={`ctaButton${index}`}
                    name={`ctaButtons[${index}].backgroundColor`}
                    type="text"
                    label={`CTA ${index} bg`}
                    onChange={handleChange}
                    value={values.ctaButtons[index].backgroundColor}
                  />
                  <TextInput
                    id={`ctaButton${index}`}
                    name={`ctaButtons[${index}].color`}
                    type="text"
                    label={`CTA ${index} color`}
                    onChange={handleChange}
                    value={values.ctaButtons[index].color}
                  />
                  {values.ctaButtons.length > 1 && <hr />}
                </React.Fragment>
              ))}
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
