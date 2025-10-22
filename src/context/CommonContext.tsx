import { router } from "expo-router";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/useDispatch";
import { updateProfile } from "../stores/slices/authSlice";
import { UserInfo } from "../types/common";
import { isFormChange } from "../utils/validationForm";

type CommonContextType = {
    pattern: string;
    setPattern: (text: string) => void;
    clearSearch: () => void;
    topicTitle: string;
    setTopicTitle: (text: string) => void;
    topicImg: string;
    setTopicImg: (text: string) => void;
    userInfo: any | UserInfo;
    setUserInfo: (userInfo: UserInfo) => void;
    handleUpdateProfile: (userInfo: UserInfo) => any;
    headerTitle: string;
    setHeaderTitle: (text: string) => void;
};

const CommonContext = createContext<CommonContextType | undefined>(undefined);

export const CommonProvider = ({ children }: { children: ReactNode }) => {
    const user = useAuth()
    const dispatch = useAppDispatch()

    const [pattern, setPattern] = useState("");
    const clearSearch = () => setPattern("");

    const [topicTitle, setTopicTitle] = useState("");
    const [topicImg, setTopicImg] = useState("");

    const [headerTitle, setHeaderTitle] = useState("");

    const [userInfo, setUserInfo] = useState<UserInfo>({
        userName: user.userName || '',
        password: '',
        city: user.city || '',
        country: user.country || '',
        bio: user.bio || ''
    })
    const handleUpdateProfile = (form: UserInfo) => {
        if (!isFormChange(user, userInfo)) return
        dispatch(updateProfile(form))
        setUserInfo({
            userName: '',
            password: '',
            city: '',
            country: '',
            bio: ''
        })
        router.back()
    }

    return (
        <CommonContext.Provider value={{
            pattern, setPattern, clearSearch,
            topicTitle, setTopicTitle,
            headerTitle, setHeaderTitle,
            topicImg, setTopicImg,
            userInfo, setUserInfo, handleUpdateProfile,
        }}>
            {children}
        </CommonContext.Provider>
    );
};

export const useCommonContext = () => {
    const context = useContext(CommonContext);
    if (!context) {
        throw new Error("useCommonContext must be used within a CommonProvider");
    }
    return context;
};
