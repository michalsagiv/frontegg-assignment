// TenantSwitcher.jsx
import React from 'react';
import { useTenantsContext } from '@frontegg/react';

export const TenantSwitcher = () => {
  const { tenants, selectedTenant, setTenant } = useTenantsContext();

  if (!tenants?.length) return null; // single-tenant users

  return (
    <select
      value={selectedTenant?.id ?? ''}
      onChange={(e) => setTenant(e.target.value)}
      style={{ marginLeft: '1rem' }}
    >
      {tenants.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
};
