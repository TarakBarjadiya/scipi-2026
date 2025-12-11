
export type PageId = 'home' | 'about' | 'keynote' | 'tracks' | 'guidelines' | 'schedule' | 'registration' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}
