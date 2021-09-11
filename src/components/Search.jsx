import React, { useState } from 'react';
import { MyTeam } from './MyTeam';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export const Search = () => {
  const [serverError, setServerError] = useState(null);
  const handleSubmit = async value => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://superheroapi.com/api/380601706991561/search/${value.search}`,
        data: {
          search: value.search,
        },
      });
      console.log(response);
    } catch (error) {
      setServerError('No such hero with that name');
    }
  };
  return (
    <div className="mt-5">
      <div>
        <div className="row">
          <div className="col-5">
            <h4>Search:</h4>
            <hr />
            <Formik
              onSubmit={handleSubmit}
              validate={value => {
                const errors = {};
                if (!value.search) {
                  errors.search = 'Required';
                } else if (!/^[a-zA-Z]+$/.test(value.search)) {
                  errors.search = 'Please enter a valid input';
                }

                return errors;
              }}
              initialValues={{
                search: '',
              }}
            >
              {({ errors, isValid, touched }) => (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="search"
                      className="form-control"
                      //   id="inputsearch"
                      name="search"
                      placeholder="Search a hero by name"
                    />
                    {errors.search && touched.search ? (
                      <div className="text-danger">{errors.search}</div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isValid}
                  >
                    Search
                  </button>
                  {serverError ? (
                    <div className="text-danger">{serverError}</div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>

          <div className="col-7">
            <h4> Results </h4>
            <hr />
            {/* {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    } */}
          </div>
        </div>
        <MyTeam />
      </div>
    </div>
  );
};
