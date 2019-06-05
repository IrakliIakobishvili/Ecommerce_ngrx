export interface MenuItem {
  title: string;
  url: string;
  icon: string;
  activeBg: string;
  activeBgColor: string;
  badge: number;
  image: {
    width: number,
    height: number,
    url: string,
    description: string
  };
}
