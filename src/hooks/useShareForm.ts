import { TShareCourseContext } from "../pages/Course/ShareCourse/ShareCorsePage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { DefaultPlace, FormDataSchema } from "../pages/Course/constants";
import { FormData } from "../pages/Course/ShareCourse/List";

export const useShareCourseForm = (context: TShareCourseContext) => {
    const {
      handleSubmit,
      control,
      setValue,
      formState: { isValid, errors },
    } = useForm<FormData>({
      resolver: zodResolver(FormDataSchema),
      mode: "onChange",
      defaultValues: {
        places: context.코스목록 || [DefaultPlace]
      }
    });
  
    const { fields, append, remove } = useFieldArray({
        control,
        name: "places",
    });
  
    return {
        handleSubmit,
        control,
        setValue,
        isValid,
        fields,
        append,
        remove,
        errors
    };
};