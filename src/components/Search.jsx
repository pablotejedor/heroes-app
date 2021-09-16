import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { HeroCard } from './HeroCard';

export const Search = ({ heroTeam, setHeroTeam }) => {
  const [serverError, setServerError] = useState(null);
  const [search, setSearch] = useState([]);
  const handleSubmit = async value => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/380601706991561/search/${value.search}`,
        data: {
          search: value.search,
        },
      });
      setSearch(response.data.results);
    } catch (error) {
      setServerError('No such hero with that name');
    }
  };
  return (
    <div className="mt-5">
      <div>
        <div className="row">
          <div>
            <h4>Search:</h4>
            <hr />
            <Formik
              onSubmit={handleSubmit}
              validate={value => {
                const errors = {};
                if (!value.search) {
                  errors.search = 'Required';
                }
                //  else if (!/^[a-zA-Z]+$/.test(value.search)) {
                //   errors.search = 'Please enter a valid input';
                // }

                return errors;
              }}
              initialValues={{
                search: '',
              }}
            >
              {({ errors, isValid, touched }) => (
                <Form>
                  <div className="d-flex mb-3">
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!isValid}
                    >
                      Search
                    </button>
                  </div>
                  {serverError ? (
                    <div className="text-danger">{serverError}</div>
                  ) : null}
                </Form>
              )}
            </Formik>
            <div className="d-flex flex-wrap m-3">
              {search ? (
                search.map(hero => (
                  <HeroCard
                    className="card m-3"
                    key={hero.id}
                    hero={hero}
                    setHeroTeam={setHeroTeam}
                    heroTeam={heroTeam}
                  />
                ))
              ) : (
                <p className="text-danger">
                  No results. Please enter a valid name
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
