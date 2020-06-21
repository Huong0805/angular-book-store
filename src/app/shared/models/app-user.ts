export interface AppUser {
    $key: string;
    name: string;
    password?: string;
    email: string;
    mobile: string;
    isAdmin: boolean;
}
