export type UserBasicType = {
    id: number,
    username: string,
    password?: string,
    email: string,
    authorities: Array<string>
}

export type UserAuthType = UserBasicType & {
    accessToken: string,
    refreshToken: string,
    tokenType: string
}