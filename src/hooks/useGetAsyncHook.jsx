import { useEffect } from "react";
import { useState } from "react";
import api from "../api";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function useGetAsync(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    api
      .get(url)
      .then((resp) => {
        setIsLoading(false);

        if (resp?.status === 200) {
          setData(resp);
          return;
        }

        toast({
          variant: "destructive",
          title: "Uh oh! 😬 Something went wrong.",
          description:
            resp?.response?.data?.message ||
            resp?.message ||
            "Something unexpected happened",
          action: (
            <ToastAction
              onClick={() => window.location.reload()}
              altText="Try again"
            >
              Try again
            </ToastAction>
          ),
        });
      })
      .catch((error) => {
        console.log("useAsync Err:", error);
        setIsLoading(false);
        setError(error);

        toast({
          variant: "destructive",
          title: "Uh oh! 😬 Something went wrong.",
          description: Array.isArray(error?.response?.data?.message)
            ? error?.response?.data?.message.join(", ")
            : error?.response?.data?.message ||
              error.message ||
              "Something unexpected happened",
          action: (
            <ToastAction
              onClick={() => window.location.reload()}
              altText="Try again"
            >
              Try again
            </ToastAction>
          ),
        });
      });
  }, [url]);

  return { data, error, isLoading };
}
