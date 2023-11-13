"use client";
import React, { useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { GetCategoryStore } from "../types/Store";
import { useState, useEffect } from "react";
export default function withList(
  InnerComponent: any,
  api: () => void,
  pagination = true
) {
  return () => {
    const searchParams = useSearchParams();
    const [key, setKey] = useState(0);
    const [size, setSize] = useState(0);
    const targetRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setKey(key + size);
        }
      },
      [key]
    );

    useEffect(() => {
      if (pagination) {
        setKey(Number(searchParams.get("key")));
        setSize(Number(searchParams.get("size")));
        const observer = new IntersectionObserver(handleScroll, {
          threshold: 0.9,
          root: null,
        });
        targetRef.current && observer.observe(targetRef.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [handleScroll]);

    const mockData: GetCategoryStore[] = [
      {
        id: "123",
        name: "왕창",
        displayName: "왕창",
        address: "서울",
        contact: "123-123-123",
        cateogyId: "1",
      },
    ]; // api result 값 mock data

    return mockData.map((result, i) => (
      <>
        <InnerComponent result={result}></InnerComponent>
        <div ref={mockData.length === i + 1 ? targetRef : null}></div>
      </>
    ));
  };
}
