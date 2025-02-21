# React Router Dom v6 Nested Routes Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6. The problem is that nested routes are not rendering correctly, and the default route is rendered instead.

## Problem

Nested routes are defined, but they are not being matched when navigating to the nested paths.

## Solution

The solution involves using the `useParams` hook to access the parameters of the nested route and conditionally rendering the components based on the parameters.  The `Outlet` component should be used to render the child routes within the parent route.

## Setup

Clone the repository and run:

```bash
npm install
npm start
```