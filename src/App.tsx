import React from 'react';
import "./tailwind.css";
import "../node_modules/daisyui/dist/full.css";

interface Props {}

export const App = ({}: Props) => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="m-4">
          <h1 className="text-xl">Hello There World </h1>
          <button className="btn btn-info btn-xs">Button</button>
        </div>

        <div className="w-1/2 drop-shadow-lg card lg:card-side">
          <div className="card-body">
            <h2 className="card-title">No Images</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-ghost">More info</button>
            </div>
            <div className="bg-slate-50">Hello</div>
          </div>
        </div>
      </div>
    </>
  );
}


