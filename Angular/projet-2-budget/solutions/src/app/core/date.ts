/** Today's local date as "YYYY-MM-DD", the format of <input type="date">. */
export function dateDuJour(): string {
  const maintenant = new Date();
  const mois = String(maintenant.getMonth() + 1).padStart(2, '0');
  const jour = String(maintenant.getDate()).padStart(2, '0');

  // Not toISOString(): it is in UTC, so just after midnight in France it gives yesterday.
  return `${maintenant.getFullYear()}-${mois}-${jour}`;
}
