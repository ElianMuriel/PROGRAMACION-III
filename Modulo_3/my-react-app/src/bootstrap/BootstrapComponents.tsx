// BootstrapComponent.tsx
import React from 'react';

export const BootstrapComponent: React.FC = () => {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        Primary
      </div>
      <div className="alert alert-secondary" role="alert">
        Secondary
      </div>


      <div className="mb-3">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>

      <h5>
        Notificaciones <span className="badge bg-success">4</span>
      </h5>

      <div className="card mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Título</h5>
          <p className="card-text"> tarjeta Bootstrap.</p>
          <a href="#" className="btn btn-primary">Ir</a>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
          60%
        </div>
      </div>
    </>
  );
};
